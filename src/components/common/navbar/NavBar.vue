<template>
    <div id="nav-bar">
        <div class="nav-bar-left">
            <slot name="left-nav">
            </slot>
        </div>
        <div class="nav-bar-center">
            <slot name="center-nav">
            </slot>
        </div>
        <div class="nav-bar-right">
            <slot name="right-nav">
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    #nav-bar {
        /* position: fixed; */
        display: flex;
        /* background-color: #ddf3f5; */
        height: 100px;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #ebebeb;
    }

    .nav-bar-left {
        flex: 2;
        /* background-color: #a6dcef; */
        /* border-right: 1px solid #a6dcef; */
    }

    .nav-bar-center {
        flex: 4;
        margin-left: 15px;
        line-height: 100px;
    }

    .nav-bar-right {
        flex: 2;
    }


</style>