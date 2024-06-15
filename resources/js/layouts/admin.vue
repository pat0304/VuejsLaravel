<template>
    <TheHeader />
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3">
                <div class="w-100">
                    <AdminMenu />
                </div>
            </div>
            <div class="col-sm-9">
                <router-view> </router-view>
            </div>
        </div>
    </div>
</template>
<script>
import TheHeader from "../components/TheHeader.vue";
import AdminMenu from "../components/AdminMenu.vue";
export default {
    components: {
        TheHeader,
        AdminMenu,
    },
};
</script>
