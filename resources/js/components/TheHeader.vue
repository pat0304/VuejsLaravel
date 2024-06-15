<template>
    <div class="position-sticky end-0 start-0 top-0 container-fluid">
        <div class="row align-items-center bg-success" style="padding: 1rem">
            <div
                class="col-1 d-flex d-sm-none align-items-center justify-content-center"
            >
                <span @click="showDrawer"
                    ><i class="bi-list fs-3 text-white"></i
                ></span>
            </div>
            <div
                class="col-10 col-sm-9 d-flex justify-content-sm-start justify-content-center align-items-center"
            >
                <img
                    src="../assets/logo.png"
                    alt="logo"
                    class="ms-3 me-3"
                    width="34"
                    height="34"
                />
                <span class="text-white d-none d-sm-block text-uppercase"
                    >Quản Trị</span
                >
            </div>
            <div
                class="col-sm-3 d-none d-sm-flex justify-content-end align-items-center"
            >
                Tài khoản
            </div>
            <div
                class="col-1 d-flex d-sm-none align-items-center justify-content-center"
            >
                <span @click="showDrawerUser"
                    ><i class="bi-person-fill fs-3 text-white"></i
                ></span>
            </div>
        </div>
    </div>
    <!-- Aside -->
    <a-drawer
        v-model:open="open"
        class="custom-class"
        title="Menu"
        placement="left"
        @after-open-change="afterOpenChange"
    >
        <a-list bordered :data-source="data">
            <template #renderItem="{ item }">
                <a-list-item>{{ item }}</a-list-item>
            </template>
            <template #header>
                <div>Header</div>
            </template>
        </a-list>
    </a-drawer>

    <!-- Admin -->
    <a-drawer
        v-model:open="open_admin"
        class="custom-class"
        title="Admin"
        placement="right"
        @after-open-change="afterOpenChange"
    >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
</template>
<script setup>
import { ref } from "vue";
const open = ref(false);
const open_admin = ref(false);
const afterOpenChange = (bool) => {
    console.log("open", bool);
};
const showDrawer = () => {
    open.value = true;
};
const showDrawerUser = () => {
    open_admin.value = true;
};
const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
];
</script>
