<template>
    <n-card hoverable content-style="padding:0" style="height: calc(100vh - 145px)">
        <ProcessDesigner v-model:xml="xml" />
    </n-card>
</template>

<script lang="ts" setup>
import { ProcessDesigner } from "@/components/ProcessDesigner";
import { onMounted, ref, watchEffect } from "vue";

let xml = ref<string>("");

let getXml = () => {
    xml.value =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">\n' +
        '  <bpmn:process id="test" name="测试流程" isExecutable="false">\n' +
        '    <bpmn:startEvent id="StartEvent_1">\n' +
        "      <bpmn:outgoing>Flow_0ofkit1</bpmn:outgoing>\n" +
        "    </bpmn:startEvent>\n" +
        '    <bpmn:task id="task_1" name="测试">\n' +
        "      <bpmn:incoming>Flow_0ofkit1</bpmn:incoming>\n" +
        "      <bpmn:outgoing>Flow_0syynkn</bpmn:outgoing>\n" +
        "    </bpmn:task>\n" +
        '    <bpmn:sequenceFlow id="Flow_0ofkit1" sourceRef="StartEvent_1" targetRef="task_1" />\n' +
        '    <bpmn:endEvent id="Event_0eojx0h">\n' +
        "      <bpmn:incoming>Flow_0syynkn</bpmn:incoming>\n" +
        "    </bpmn:endEvent>\n" +
        '    <bpmn:sequenceFlow id="Flow_0syynkn" sourceRef="task_1" targetRef="Event_0eojx0h" />\n' +
        "  </bpmn:process>\n" +
        '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n' +
        '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="test">\n' +
        '      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n' +
        '        <dc:Bounds x="173" y="102" width="36" height="36" />\n' +
        "      </bpmndi:BPMNShape>\n" +
        '      <bpmndi:BPMNShape id="Activity_03qvdye_di" bpmnElement="task_1">\n' +
        '        <dc:Bounds x="260" y="80" width="100" height="80" />\n' +
        "        <bpmndi:BPMNLabel />\n" +
        "      </bpmndi:BPMNShape>\n" +
        '      <bpmndi:BPMNShape id="Event_0eojx0h_di" bpmnElement="Event_0eojx0h">\n' +
        '        <dc:Bounds x="412" y="102" width="36" height="36" />\n' +
        "      </bpmndi:BPMNShape>\n" +
        '      <bpmndi:BPMNEdge id="Flow_0ofkit1_di" bpmnElement="Flow_0ofkit1">\n' +
        '        <di:waypoint x="209" y="120" />\n' +
        '        <di:waypoint x="260" y="120" />\n' +
        "      </bpmndi:BPMNEdge>\n" +
        '      <bpmndi:BPMNEdge id="Flow_0syynkn_di" bpmnElement="Flow_0syynkn">\n' +
        '        <di:waypoint x="360" y="120" />\n' +
        '        <di:waypoint x="412" y="120" />\n' +
        "      </bpmndi:BPMNEdge>\n" +
        "    </bpmndi:BPMNPlane>\n" +
        "  </bpmndi:BPMNDiagram>\n" +
        "</bpmn:definitions>";
};

onMounted(() => {
    getXml();
});

watchEffect(() => {
    if (xml.value) {
        console.log("xml", xml.value);
    }
});
</script>
