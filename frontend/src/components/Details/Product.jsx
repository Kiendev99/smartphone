import { useParams } from "react-router";
import {useState, useEffect} from 'react';
import { styled } from "styled-components";
import axios from "axios";
import { setHeaders, url } from "../../slices/api";
const Product = () => {
    
    const params = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    console.log("products", product);
    useEffect(()=>{
        async function fetchData(){
            try{
                const res = await axios.get(`${url}/products/find/${params.id}`, setHeaders());
                setProduct(res.data);
                
            } catch(err){
                console.log(err);
            }
            setLoading(false);
        }
        fetchData();
    }, [params.id]);

    return ( <StyledProduct>
        <ProductContainer>
        {loading?<p>Loading...</p>: <>
            <ImageContainer>
                <img src={product.image} alt="" />
            </ImageContainer>
            <ProductDetails>
                <h3>{product.name}</h3>
                <p><span>Nhãn hiệu:</span> {product.brand}</p>
                <p><span>Mô tả:</span> {product.desc}</p>
                <Price>${product.price?.toLocaleString()}</Price>
            </ProductDetails>
        </>}
        
    </ProductContainer>
    
    
    </StyledProduct> );
}
 
export default Product;

const StyledProduct = styled.div`
    margin: 3rem;
    display: flex;
    justify: center;
`;
const ProductContainer = styled.div`
    max-width: 500px;
    width: 100%;
    height: auto;
    display: flex;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    padding: 2rem;
`;
const ImageContainer = styled.div`
    flex: 1;
    img {
        width: 100%;
    }
`
const ProductDetails = styled.div`
    flex: 2;
    margin-left: 2rem;
    h3{
        font-size: 35px;
    }
    p span {
        font-weight: bold;
    }
`;

const Price = styled.div`
   margin: 1rem 0;
   font-weight: bold;
   font-size: 25px;

`;