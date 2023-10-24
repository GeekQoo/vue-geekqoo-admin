<template>
    <div class="process-designer wh-100% relative">
        <div id="canvas" class="wh-100%" />
        <div id="properties" class="absolute right-20px top-20px" />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, watch } from "vue";
import { useThrottleFn } from "@vueuse/core";
import translate from "@/plugins/bpmn/i18n";
import BpmnModeler from "bpmn-js/lib/Modeler";
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from "bpmn-js-properties-panel";

let props = withDefaults(defineProps<{ xml: string }>(), {
    xml: ""
});

let emits = defineEmits(["update:xml"]);

// 建模
let modeler: any = null;

let onModeling = async () => {
    [modeler] = await Promise.all([
        new BpmnModeler({
            container: "#canvas",
            propertiesPanel: {
                parent: "#properties"
            },
            additionalModules: [
                BpmnPropertiesPanelModule,
                BpmnPropertiesProviderModule,
                // 汉化
                { translate: ["value", translate("zh")] }
            ],
            moddleExtensions: {}
        })
    ]);
    await modeler.createDiagram();
};

onMounted(async () => {
    await onModeling();
    if (props.xml) {
        try {
            await modeler.importXML(props.xml);
        } catch (err) {
            console.log("err", err);
        }
    }
});

// 流程变更
watch(
    () => modeler,
    (val) => {
        if (val) {
            val.on("commandStack.changed", modelerChange);
        }
    }
);

let modelerChange = useThrottleFn(() => {
    onSave();
}, 1000);

// 保存
let onSave = async () => {
    let { xml } = await modeler.saveXML({ format: true });
    emits("update:xml", xml);
};

onUnmounted(() => {
    modeler.destroy();
});
</script>

<style lang="scss">
@import "bpmn-js/dist/assets/diagram-js.css";
@import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
@import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
@import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
@import "@bpmn-io/properties-panel/assets/properties-panel.css";

.process-designer {
    #canvas {
        background-image: linear-gradient(90deg, hsla(0, 0%, 78.4%, 0.15) 10%, transparent 0),
            linear-gradient(hsla(0, 0%, 78.4%, 0.15) 10%, transparent 0);
        background-size: 10px 10px;
    }
}
</style>
