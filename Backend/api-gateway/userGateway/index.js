const gateway = require("fast-gateway");
const authenticateUser = require("../../authentication/middleware/auth");


const server = gateway({
    routes: [{
        prefix: "/products",
        target: "http://localhost:8081",
        methods: ['GET']
    },
    {
        prefix: "/auth",
        target: "http://localhost:8080",
    }, {
      
        prefix: "/cart",
        target: "http://localhost:8083",
    }, {
     
        prefix: "/wishlist",
        target: "http://localhost:8084",
    }, {
    
        prefix: "/coupons",
        target: "http://localhost:8085",
    }]

})
server.get("/", (req, res) => {
    res.send("User Gateway called")
})
server.start(9001);