from fastapi import FastAPI
from mockData import products
app = FastAPI()

@app.get("/")
def home():
    return {"data": "hello world"} 


@app.get("/contact")
def contact():
    return "you can connect us any time"

@app.get("/products")
def get_products():
    return products


# Path parameters
@app.get("/product/{product_id}")
def get_one_product(product_id : int):
    for oneProduct in products:
        if (oneProduct.get("id") == product_id):
            return oneProduct
        
    return "No product found" 


# Query params

@app.get("/greet")
def greet_user(name: str):
    return {
        "greet" : f"Hello {name}, How are you ?"
    }

