<template>
    <el-row>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <router-link to="/">Home</router-link>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple-light">
                <router-link to="/about">About</router-link>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <router-link to="/works">Works</router-link>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple-light">
                <router-link to="/skil">Skil</router-link>
            </div>
        </el-col>
    </el-row>
</template>

<style lang="sass" scoped>

</style>
