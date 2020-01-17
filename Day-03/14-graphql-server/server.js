const express = require('express'),
    apolloServerExpress = require('apollo-server-express'),
    axios = require('axios'),
    gql = apolloServerExpress.gql;


const app = express();

const schema = gql`
    
    type Product {
        id : ID!,
        name : String,
        cost : Int,
        units : Int,
        inStock : Boolean
    }

    input ProductData{
        id : ID!,
        name : String,
        cost : Int,
        units : Int,
        inStock : Boolean
    }

    type Category{
        id : ID!,
        name : String,
        products : [Product]
    }

    type User{
        id : ID!,
        name : String,
        isActive : Boolean
    }

    type Query {
        hello(name : String) : String,
        getProducts : [Product],
        getProductsById(id : ID!) : Product,
        getCategories : [Category],
        getUsers : [User]
    }

    type Mutation{
        addProduct(id : ID!, name : String, cost : Int, units : Int, inStock : Boolean) : Product,
        addCategory(id : ID!, name : String, products : [ProductData]) : Category
    }
`

const productList = [
    {id : 1, name : 'Pen', cost : 30, units : 70, inStock : true},
    { id: 2, name: 'Hen', cost: 20, units: 40, inStock: true },
    { id: 3, name: 'Den', cost: 70, units: 60, inStock: false },
    { id: 4, name: 'Zen', cost: 50, units: 90, inStock: true }
];

const categoryList = [
    { id : 1, name : 'Grocery', products : [] },
    { id: 2, name: 'Stationary', products: [] }
]

const resolvers = {
    Query : { 
        hello : (parent, args) => {
            return `Hello ${args.name}`;
        },
        getProducts : (parent, args) => {
            return productList;
        },
        getProductsById : (parent, args) => {
            const productId = parseInt(args.id);
            return productList.find(product => product.id === productId);
        },
        getCategories : (parent, args) => {
            return categoryList;
        },
        getUsers : async (parent, args) => {
            const response = await axios.get('http://localhost:4000/users')
            return response.data;
        }
    },
    Mutation : {
        addProduct: (parent, { id, name, cost, units, inStock }) => {
            console.log(parent);
            const newProduct = { id, name, cost, units, inStock };
            productList.push(newProduct);
            return newProduct;
        },
        addCategory : (parent, { id, name, products}) => {
            const newCategory = { id, name, products };
            categoryList.push(newCategory);
            return newCategory;
        }
    }
}
const apolloServer = new apolloServerExpress.ApolloServer({
    typeDefs: schema,
    resolvers,
});

apolloServer.applyMiddleware({ app, path : '/graphql'})

app.listen({ port: 8085 }, () => {
    console.log('Apollo Server on http://localhost:8085/graphql');
});