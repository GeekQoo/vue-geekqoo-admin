<template>
    <n-card hoverable content-style="padding:0" style="height: calc(100vh - 145px)">
        <div class="wh-100% relative">
            <div id="canvas" class="wh-100%" />
            <div id="properties" class="absolute right-20px top-20px" />
        </div>
    </n-card>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import translate from "@/plugins/bpmn/i18n";
import BpmnModeler from "bpmn-js/lib/Modeler";
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from "bpmn-js-properties-panel";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "@bpmn-io/properties-panel/assets/properties-panel.css";

onMounted(() => {
    onModeling();
});

// 建模
let bpmnModeler;

let onModeling = () => {
    let customTranslateModule = {
        translate: ["value", translate]
    };
    bpmnModeler = new BpmnModeler({
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
    });
    bpmnModeler.createDiagram();
};
</script>
