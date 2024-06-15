<template>
    <div style="width: 100%">
        <a-menu
            v-model:openKeys="state.openKeys"
            v-model:selectedKeys="state.selectedKeys"
            mode="inline"
        >
            <a-menu-item key="admin-settings">
                <router-link :to="{ name: 'admin-settings' }"
                    >Settings</router-link
                >
            </a-menu-item>
        </a-menu>
    </div>
</template>
<script setup>
import { reactive, watch, h } from "vue";
import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
} from "@ant-design/icons-vue";
const state = reactive({
    collapsed: false,
    selectedKeys: ["1"],
    openKeys: ["sub1"],
    preOpenKeys: ["sub1"],
});
watch(
    () => state.openKeys,
    (_val, oldVal) => {
        state.preOpenKeys = oldVal;
    }
);
</script>
