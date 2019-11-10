const routers = [
    {
        path:"/login",
        meta:{
            title:"登陆"
        },
        component: (resolve) => require(['../views/login.vue'], resolve)
    },
    {
        path:"/index",
        meta:{
            title:"首页"
        },
        component: (resolve) => require(['../views/index.vue'], resolve)
    },
    {
        path:"/listpage",
        meta:{
            title:"方案管理"
        },
        component: (resolve) => require(['../views/listpage.vue'], resolve)
    },
    {
        path: '/list',
        meta: {
            title: '评估系统'
        },
        component: (resolve) => require(['../views/list.vue'], resolve)
    },
    
    {
        path: '/task/:id',
        meta: {
            title: '评估详情'
        },
        component: (resolve) => require(['../views/task.vue'], resolve)
    },
    {
        path: '/template',
        meta: {
            title: '评估模板'
        },
        component: (resolve) => require(['../views/template.vue'], resolve)
    },
    {
        path:"/hardware",
        meta:{
            title:"人机参数"
        },
        component: (resolve) => require(['../views/hardware.vue'], resolve)
    },
    {
        path:"/evaluate",
        meta:{
            title:"参数检验"
        },
        component: (resolve) => require(['../views/evaluate.vue'], resolve)
    },
    {
        path:"/link",
        meta:{
            title:"参数检验"
        },
        component: (resolve) => require(['../views/link.vue'], resolve)
    },
    {
        path:"/result",
        meta:{
            title:"参数检验"
        },
        component: (resolve) => require(['../views/result.vue'], resolve)
    },
    {
        path: '/room',
        meta: {
            title: '指标库与方法库'
        },
        component: (resolve) => require(['../views/room.vue'], resolve)
    },
    {
        path: '/new',
        meta: {
            title: '新建评估'
        },
        component: (resolve) => require(['../views/new.vue'], resolve)
    },
    {
        path: '/show',
        meta: {
            title: 'DEMO'
        },
        component: (resolve) => require(['../views/show.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
];
export default routers;