<template>
    <div class="process-designer wh-100% relative">
        <div id="canvas" class="wh-100%" />
        <div v-show="debug" id="properties" class="absolute right-20px top-20px" />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import { useThrottleFn } from "@vueuse/core";
import translate from "./utils/i18n";
import BpmnModeler from "bpmn-js/lib/Modeler";
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from "bpmn-js-properties-panel";
import dayjs from "dayjs";

let props = withDefaults(
    defineProps<{
        xml: string;
        debug?: boolean;
    }>(),
    {
        xml: "",
        debug: false
    }
);

let emits = defineEmits(["update:xml"]);

// 创建空xml
let createEmptyXml = (
    processId: string,
    processName: string,
    category: string = "http://bpmn.io/schema/bpmn",
    description: string = ""
) => {
    return `<?xml xml=string version="2.0" encoding="UTF-8"?>
    <bpmn:definitions xmlns:flowable="http://flowable.org/bpmn" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" targetNamespace="${category}">
      <bpmn:process id="${processId}" name="${processName}" isExecutable="true">
          <bpmn:documentation>${description}</bpmn:documentation>
      </bpmn:process>
      <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
          <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
            <dc:Bounds height="36.0" width="36.0" x="160.0" y="160.0"/>
          </bpmndi:BPMNShape>
        </bpmndi:BPMNPlane>
      </bpmndi:BPMNDiagram>
    </bpmn:definitions>`;
};

// 建模
let modeler: any = null;

let onModeling = async () => {
    [modeler] = await Promise.all([
        new BpmnModeler({
            container: "#canvas",
            keyboard: { bindTo: window },
            propertiesPanel: { parent: "#properties" },
            additionalModules: [
                BpmnPropertiesPanelModule,
                BpmnPropertiesProviderModule,
                { translate: ["value", translate("zh")] }
            ],
            moddleExtensions: {}
        })
    ]);
    if (props.xml) {
        await modeler.importXML(props.xml);
    } else {
        let nowTime = dayjs().valueOf();
        await modeler.importXML(createEmptyXml(`id${nowTime}`, `流程${nowTime}`));
    }
    onWatchModeler();
};

onMounted(async () => {
    await onModeling();
});

// 流程监听
let onWatchModeler = () => {
    // 自动更新xml
    modeler.on("commandStack.changed", () => {
        onAutoSave();
    });
    modeler.on("element.click", (e: any) => {
        switch (e.element.type) {
            case "bpmn:Process":
                window.$message.success(`选中流程，ID为${e.element.id}`);
                break;
            case "bpmn:StartEvent":
                window.$message.success(`选中开始节点，ID为${e.element.id}`);
                break;
            case "bpmn:EndEvent":
                window.$message.success(`选中结束节点，ID为${e.element.id}`);
                break;
            case "bpmn:UserTask":
                window.$message.success(`选中用户任务，ID为${e.element.id}`);
                break;
            case "bpmn:ExclusiveGateway":
                window.$message.success(`选中排他网关，ID为${e.element.id}`);
                break;
            case "bpmn:ParallelGateway":
                window.$message.success(`选中并行网关，ID为${e.element.id}`);
                break;
            case "bpmn:SequenceFlow":
                window.$message.success(`选中连线，ID为${e.element.id}`);
                break;
            default:
                window.$message.success(`选中节点，ID为${e.element.id}`);
                break;
        }
    });
};

let onAutoSave = useThrottleFn(async () => {
    let { xml } = await modeler.saveXML({ format: true });
    emits("update:xml", xml);
}, 1000);

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
