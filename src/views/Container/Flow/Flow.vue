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
    xml.value = `<?xml version="1.0" encoding="UTF-8"?>
    <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
    <bpmn:process id="test" name="测试流程" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1">
    <bpmn:outgoing>Flow_0ofkit1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_0ofkit1" sourceRef="StartEvent_1" targetRef="task_1" />
    <bpmn:endEvent id="Event_0eojx0h">
    <bpmn:incoming>Flow_0syynkn</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_0syynkn" sourceRef="task_1" targetRef="Event_0eojx0h" />
    <bpmn:userTask id="task_1" name="测试">
    <bpmn:incoming>Flow_0ofkit1</bpmn:incoming>
    <bpmn:outgoing>Flow_0syynkn</bpmn:outgoing>
    </bpmn:userTask>
    </bpmn:process>
    <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="test">
    <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
    <dc:Bounds x="173" y="102" width="36" height="36" />
    </bpmndi:BPMNShape>
    <bpmndi:BPMNShape id="Event_0eojx0h_di" bpmnElement="Event_0eojx0h">
    <dc:Bounds x="412" y="102" width="36" height="36" />
    </bpmndi:BPMNShape>
    <bpmndi:BPMNShape id="Activity_1d9s9lo_di" bpmnElement="task_1">
    <dc:Bounds x="260" y="80" width="100" height="80" />
    </bpmndi:BPMNShape>
    <bpmndi:BPMNEdge id="Flow_0ofkit1_di" bpmnElement="Flow_0ofkit1">
    <di:waypoint x="209" y="120" />
    <di:waypoint x="260" y="120" />
    </bpmndi:BPMNEdge>
    <bpmndi:BPMNEdge id="Flow_0syynkn_di" bpmnElement="Flow_0syynkn">
    <di:waypoint x="360" y="120" />
    <di:waypoint x="412" y="120" />
    </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
    </bpmndi:BPMNDiagram>
    </bpmn:definitions>
    `;
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
