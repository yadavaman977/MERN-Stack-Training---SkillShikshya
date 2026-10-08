
    async function getProducts() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");

        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
    finally{
        console.log("fetching Data")
    }
}

getProducts();
