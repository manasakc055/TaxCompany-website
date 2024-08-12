<template>
    <!-- Service -->
    <div class=" service-sec1 d-flex align-items-center">
        <div class="container">
            <div class="row p-2">
                <div>
                    <RouterLink class="routlink" to="/">Home page</RouterLink> <i class="bi bi-chevron-right"></i>
                    <RouterLink class="routlink" to="/contact">Contact us</RouterLink>
                </div>
                <!-- <h1 class="my-3 ">{{current_data.title}}</h1> -->
                <p>with over 10 years of experience helping
                    busineto fi d<br>comprehensive solution
                </p>
            </div>
        </div>
    </div>
    <!-- Service-section-2 -->
    <div class=" service-sec2 d-flex align-items-center my-5">
        <div class="container">
            <div class="row ">
                <!-- col1   sidebar -->
                <sidemenu />
                <!-- col-2  information  -->
                <div class="col-sm-9  my-4">
                    <!--row 1-->
                    <div class="row R1">
                        <p class="mini-h mb-0 ">Service</p>
                        <h2 class="pb-2"> {{ data[id].title }}</h2>
                        <p>{{ data[id].description }}</p>
                        <div class="sub-heads py-2" v-for="(topic, index) in data[id]['sub-topics']" :key="index">

                            <h5>{{ topic.title }}</h5>
                            <p>{{ topic.description }}</p>

                            <ul class="bg-success" v-if="topic.sublist">
                                <li v-for="(item, i) in topic.sublist" :key="i">{{ item }}</li>
                            </ul>
                            <p v-if="topic['description-1']">{{ topic['description-1'] }}</p>
                            <p v-if="topic['description-2']">{{ topic['description-2'] }}</p>
                            <p v-if="topic['description-3']">{{ topic['description-3'] }}</p>
                            <p v-if="topic['description-4']">{{ topic['description-4'] }}</p>

                            <div v-if="topic['sub-topics']" v-for="(subTopic, subIndex) in topic['sub-topics']" :key="subIndex">
                                <h5>{{ subTopic.title }}</h5>
                                <p>{{ subTopic.description }}</p>
                                <p v-if="subTopic['small-para']">{{ subTopic['small-para'] }}</p>

                                <div v-if="subTopic['sub-topics']"
                                    v-for="(nestedTopic, nestedIndex) in subTopic['sub-topics']" :key="nestedIndex">
                                    <h5>{{ nestedTopic.title }}</h5>
                                    <p>{{ nestedTopic.description }}</p>

                                    <ul v-if="nestedTopic.sublist">
                                        <li v-for="(listItem, listIndex) in nestedTopic.sublist" :key="listIndex">
                                            {{listItem }}</li>
                                    </ul>

                                    <p v-if="nestedTopic['description-1']">{{ nestedTopic['description-1'] }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import sidemenu from './sidemenu.vue';
import data from './data/tax';
import { useRoute } from 'vue-router';
import main_data from './data/main_data';

export default {
    name: "info.vue",
    components: {
        sidemenu,
    },
    data() {
        return {
            data: main_data,
            id: 0,
            current_data: null
        }
    },
    mounted() {
        const route = useRoute();
        console.log("mounted")
        console.log(route.params.id)
        this.id = route.params.id;
    }

}
</script>

<style scoped>
p {
    font-size: 15px;

}

.routlink {
    color: white;
    text-decoration: none;

}

.bi-chevron-right {
    color: white !important;
    /* font-weight:bold; */

}

.service-sec1 {
    color: white;
    background-image: url("../../assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 400px;

}

/* Service-section-2 */
/* col1 */
.mini-h,
h4 {
    color: rgb(0, 84, 139);
    font-weight: 700;

}

.service-sec2 li {
    font-size: 15px;

}

.service-sec2 h2 {
    color: #18ba60;
}

.service-sec2 img {
    height: auto;
    width: 100%;
}

/* col2 */
.servpage-sec1-col2 {
    width: 400px;
    /* background-color: #8bdbaf; */
    padding: 25px 25px;
}

.service-sec2 h3 {
    font-size: 25px;
    margin: 30px 0;
    color: #3a526a;
}

.service-sec2 hr {
    border-bottom: 2px solid gray;
    margin-bottom: 40px;
}

/* .service-sec2 ul {
    padding-left: 5px;
    list-style: none;
}

.service-sec2 ul li {
    margin-bottom: 25px;
}

.service-sec2 ul li:hover {
    cursor: pointer;
    font-weight: 700;
    color: #3a526a;
    text-decoration: underline #18ba60 1px;
} */


/*********form************/
.f {
    width: 100%;
    height: auto;
    background-color: #F1F6F2;
    border-radius: 25px;
}

.send-form {
    margin: 30px 15px;
    padding: 20px 0px;

}

.send-form input {
    width: 100%;
    height: auto;
    font-size: 17px;
    margin-bottom: 30px;
    background-color: white;
    border: transparent;
    padding: 8px;
}

.send-form .msg {
    padding-bottom: 75px;
}

.send-form button {
    width: 100%;
    height: 40px;
    font-size: 17px;
    font-weight: 600;
    color: white;
    background-color: #18ba60;
    border: transparent;
}

/****Row R2 ****/
.R1 ul{
    text-decoration: none;
}

.R2-list {
    padding-left: 30px;
}

.R2 ul li,
.R3 ul li {
    margin-bottom: 0px;
    list-style: disc;
    font-weight: 500;
    color: #000;
}

/****Row R3 ****/
.R3 h5 {
    font-size: 18px;
    padding: 0 10px;
}

.R3 span {
    color: rgb(0, 84, 139);
    margin-bottom: 15px;
}

.R3 table {
    background: #eff7ff;
    border: solid 1px #e2e2e2;
    margin-bottom: 20px;
    margin-left: 10px;
}

.R3 table tr,
.R3 table td {
    border: solid 2px #e2e2e2;
    padding: 5px 2px 2px 5px;
    font-size: 15px;
}

.R3 .card {
    background: #eff7ff;
    border: solid 2px #e2e2e2;
    padding: 15px;
    width: 600px;
    margin-bottom: 20px;
    margin-left: 10px;
}

.R3 .card .card-body {
    display: flex;
    align-items: start;
    gap: 25px;
    padding: 15px 0px;
}

.R3 .card .card-body button {
    width: 200px;
    height: 35px;
}

.R3 .table-heading {
    margin-bottom: 10px;
}

.R3 .R3-ul-list {
    margin-left: 10px;
}
</style>