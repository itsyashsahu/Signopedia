module.exports = {
    apps: [
        {
            name: 'be',
            script: './node_modules/next/dist/bin/next',
            args: 'start',
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};

// module.exports = {
//     apps: [
//         {
//             name: "signopedia",
//             script: "node_modules/next/dist/bin/next",
//             args: "start",
//             cwd: process.cwd(),
//             instances: "1",
//             autorestart: true,
//             watch: false,
//             max_memory_restart: "1G",
//             env: {
//                 NODE_ENV: "production",
//             },
//         },
//     ],
// };
