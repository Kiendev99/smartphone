import { styled } from "styled-components";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { productsDelete } from "../../../slices/productSlices";
import EditProduct from "../EditProduct";



export default function ProductsList() {
    const navigate = useNavigate();
    const {items} = useSelector((state) => state.products);
    const dispatch = useDispatch();
  
    const rows = items && items.map(item => {
        return {
            id: item._id,
            imageUrl: item.image,
            pName: item.name,
            pDesc: item.desc,
            price: item.price.toLocaleString(),

        }
    })
    const columns = [
        { field: 'id', headerName: 'ID', width: 220 },
        { field: 'imageUrl', headerName: 'Image', width: 80, 
          renderCell: (params) => {
            return (
                <ImageContainer>
                    <img src={params.row.imageUrl} alt=""/>
                </ImageContainer>
            )
          }
    },
        { field: 'pName', headerName: 'Name', width: 130 },
        {
          field: 'pDesc',
          headerName: 'Mô tả',
          width: 130,
        },
        {
            field: 'price',
            headerName: 'Giá',
            width: 80,
          },
        {
          field: 'actions',
          headerName: 'Hành động',
          sortable: false,
          width: 170,
          renderCell: (params) => {
            return (
                <Actions>
                    <Delete onClick={ () => handelDelete(params.row.id)  }>Delete</Delete>
                    <EditProduct prodID={params.row.id}/>
                    <View onClick={() => navigate(`/product/${params.row.id}`)}>View</View>
                </Actions>
            )
          }
        },
      ];
      const handelDelete = (id) =>{
        dispatch(productsDelete(id));
      };
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}


const ImageContainer = styled.div`
img{
    height: 40px;
}
`;

const Actions = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   button{
    border: none;
    outline: none;
    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
   }
`;

const Delete = styled.button`
   background-color: rgb(255, 77, 73);
` ;
const View = styled.button`
    background-color: rgb(235, 191, 18);

`
