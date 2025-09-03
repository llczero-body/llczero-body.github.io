<script setup lang="ts">
</script>

<template>
    <FrostedGlass>
        <div class="container frosted-calss-text">
            <el-row style="width: 100%">
                <el-col :span="24" class="col-wrapper">
                    <div class="frostedGlass avatar-wrapper">
                        <div class="avatar-container ">
                            <div class="avatar-bg"></div>
                            <div class="avatar">
                                <img class="avatar" src="../../assets//avatar.png" alt="头像"></img>
                            </div>
                        </div>
                        <div class="name">zero</div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </FrostedGlass>
</template>
<style lang="scss" scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.col-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

.avatar-wrapper {
    max-width: 500px;
    width: 100%;
    // width: calc(100% - 40px);
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    // padding: 20px;

    .avatar {
        border-radius: 50%;
    }

    .name {
        font-size: 40px;
        background: linear-gradient(45deg, #ff0066, #6600ff, #00ccff);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientShift 8s ease infinite;
    }
}

.avatar-container {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0 auto;
}

.avatar {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 10;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
    border: 2px solid #fff;
    transition: all 0.5s ease;
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.avatar-bg {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff0066, #6600ff, #00ccff, #ff0066);
    background-size: 300% 300%;
    animation: gradientShift 8s ease infinite;
    filter: blur(15px);
    opacity: 0.7;
    z-index: 1;
    transition: all 0.5s ease;
}

.avatar-container:hover .avatar {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.8);
}

.avatar-container:hover .avatar-bg {
    transform: scale(1.1);
    opacity: 0.9;
    filter: blur(20px);
    animation: gradientShift 3s ease infinite;
}

.avatar-container:hover .particle {
    animation: particleFloat 1.5s ease-in-out infinite;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

@keyframes particleFloat {
    0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
    }

    50% {
        opacity: 0.6;
    }

    100% {
        transform: translateY(var(--y)) translateX(var(--x));
        opacity: 0;
    }
}

@media (max-width: 768px) {
    .avatar-container {
        width: 150px;
        height: 150px;
    }
}
</style>