const MENU = [
  {
    title: "Especiais do Dia",
    data: [
      {
        id: "1",
        title: "Clássico de Carne Bovina",
        price: 24.9,
        description:
          "Um favorito atemporal com um suculento hambúrguer de carne bovina, alface, tomate, picles, cebola e nosso molho especial.",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Pão brioche",
          "1x hambúrguer de carne bovina",
          "Queijo cheddar",
          "Alface",
          "Tomate",
          "Picles",
          "Cebola",
          "Molho especial",
        ],
      },
    ],
  },
  {
    title: "Hambúrgueres",
    data: [
      {
        id: "2",
        title: "Bacon Deluxe Burger",
        price: 34.9,
        description:
          "Para os amantes de bacon! Nosso burger deluxe vem com tiras crocantes de bacon, queijo derretido e uma variedade de vegetais frescos.",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Pão brioche",
          "2x hambúrgueres de carne bovina",
          "Queijo cheddar derretido",
          "Bacon crocante",
          "Alface",
          "Tomate",
          "Picles",
          "Cebola",
          "Molho especial",
        ],
      },
      {
        id: "3",
        title: "Hambúrguer Apimentado de Jalapeño",
        price: 32.7,
        description:
          "Esquente as coisas com o nosso Hambúrguer Apimentado de Jalapeño! Cheio de sabor e um toque de pimenta.",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Pão brioche",
          "2x hambúrgueres de carne bovina",
          "Queijo pepper jack",
          "Jalapeños frescos",
          "Alface",
          "Tomate",
          "Picles",
          "Cebola",
          "Maionese apimentada",
        ],
      },
      {
        id: "4",
        title: "Hambúrguer de Cogumelos com Queijo Suíço",
        price: 29.9,
        description:
          "Saboreie a bondade terrosa dos cogumelos salteados e queijo suíço derretido a cada mordida.",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Pão brioche",
          "1x hambúrguer de carne bovina",
          "Cogumelos salteados",
          "Queijo suíço",
          "Alface",
          "Tomate",
          "Picles",
          "Cebola",
          "Molho de alho",
        ],
      },
    ],
  },
  {
    title: "Sobremesas",
    data: [
      {
        id: "5",
        title: "Sundae de Brownie",
        price: 18.9,
        description:
          "Indulja-se em uma deliciosa sobremesa com nosso Sundae de Brownie. Escolha seu sorvete favorito e coberturas.",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: ["Brownie", "Bola de sorvete", "Escolha de coberturas"],
      },
      {
        id: "6",
        title: "Cupcake Clássico",
        price: 22.9,
        description:
          "Um delicioso cupcake no seu sabor favorito, coberto com uma cobertura fofa.",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Escolha de sabor de cupcake", "Cobertura fofa"],
      },
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "7",
        title: "Coca-Cola Gelada",
        price: 6.9,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "Uma Coca-Cola super gelada para acompanhar a sua refeição deliciosa.",
        ingredients: [],
      },
    ],
  },
];

const PRODUCTS = MENU.map((item) => item.data).flat();

const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductProps };
