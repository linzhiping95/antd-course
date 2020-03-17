export default {
    singular:true,
    plugins:[
        ['umi-plugin-react', 
        {
            // 这里暂时还没有添加配置
          }],
    ],
    routes:[{
        path:'/',
        component:'./HelloWorld',
    }]        
};