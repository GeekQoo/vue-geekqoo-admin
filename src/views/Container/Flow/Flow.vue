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
let bpmnModeler: any;

let onModeling = () => {
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

    let xml =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">\n' +
        '  <bpmn:process id="Process_1" isExecutable="false">\n' +
        '    <bpmn:startEvent id="StartEvent_1">\n' +
        "      <bpmn:outgoing>Flow_0ke81h8</bpmn:outgoing>\n" +
        "    </bpmn:startEvent>\n" +
        '    <bpmn:task id="Activity_1jyudvo" name="测试">\n' +
        "      <bpmn:incoming>Flow_0ke81h8</bpmn:incoming>\n" +
        "      <bpmn:outgoing>Flow_0fjy0bh</bpmn:outgoing>\n" +
        "    </bpmn:task>\n" +
        '    <bpmn:sequenceFlow id="Flow_0ke81h8" sourceRef="StartEvent_1" targetRef="Activity_1jyudvo" />\n' +
        '    <bpmn:endEvent id="Event_0deir6r">\n' +
        "      <bpmn:incoming>Flow_0fjy0bh</bpmn:incoming>\n" +
        "    </bpmn:endEvent>\n" +
        '    <bpmn:sequenceFlow id="Flow_0fjy0bh" sourceRef="Activity_1jyudvo" targetRef="Event_0deir6r" />\n' +
        "  </bpmn:process>\n" +
        '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n' +
        '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n' +
        '      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n' +
        '        <dc:Bounds x="173" y="102" width="36" height="36" />\n' +
        "      </bpmndi:BPMNShape>\n" +
        '      <bpmndi:BPMNShape id="Activity_1jyudvo_di" bpmnElement="Activity_1jyudvo">\n' +
        '        <dc:Bounds x="280" y="100" width="100" height="80" />\n' +
        "        <bpmndi:BPMNLabel />\n" +
        "      </bpmndi:BPMNShape>\n" +
        '      <bpmndi:BPMNShape id="Event_0deir6r_di" bpmnElement="Event_0deir6r">\n' +
        '        <dc:Bounds x="482" y="142" width="36" height="36" />\n' +
        "      </bpmndi:BPMNShape>\n" +
        '      <bpmndi:BPMNEdge id="Flow_0ke81h8_di" bpmnElement="Flow_0ke81h8">\n' +
        '        <di:waypoint x="209" y="120" />\n' +
        '        <di:waypoint x="245" y="120" />\n' +
        '        <di:waypoint x="245" y="140" />\n' +
        '        <di:waypoint x="280" y="140" />\n' +
        "      </bpmndi:BPMNEdge>\n" +
        '      <bpmndi:BPMNEdge id="Flow_0fjy0bh_di" bpmnElement="Flow_0fjy0bh">\n' +
        '        <di:waypoint x="380" y="140" />\n' +
        '        <di:waypoint x="430" y="140" />\n' +
        '        <di:waypoint x="430" y="160" />\n' +
        '        <di:waypoint x="482" y="160" />\n' +
        "      </bpmndi:BPMNEdge>\n" +
        "    </bpmndi:BPMNPlane>\n" +
        "  </bpmndi:BPMNDiagram>\n" +
        "</bpmn:definitions>\n";

    // xml回显
    bpmnModeler.importXML(xml);
};

// 保存
let onSave = async () => {
    let { xml } = await bpmnModeler.saveXML({ format: true });
    // 打印XML
    console.log(xml);
};
</script>

<style lang="scss" scoped>
#canvas {
    background-image: linear-gradient(90deg, hsla(0, 0%, 78.4%, 0.15) 10%, transparent 0),
        linear-gradient(hsla(0, 0%, 78.4%, 0.15) 10%, transparent 0);
    background-size: 10px 10px;
}
</style>
