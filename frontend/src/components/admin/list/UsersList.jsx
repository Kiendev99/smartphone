import { styled } from "styled-components";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {useEffect} from "react";
import { usersDelete, usersFetch } from "../../../slices/userSlice";



export default function UsersList() {
    const navigate = useNavigate();
    const {list} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(usersFetch());
    }, [dispatch]);
  
    const rows = list && list.map(user => {
        return {
            id: user._id,
            isAdmin: user.isAdmin,
            uName: user.name,
            uEmail: user.email,
        }
    })
    const columns = [
        { field: 'id', headerName: 'ID', width: 220 },
        { field: 'uName', headerName: 'Name', width: 150 },
        {
          field: 'uEmail',
          headerName: 'Email',
          width: 200,
        },
        { 
            field: 'isAdmin',
            headerName: 'Role',
            width: 100,
          
          renderCell: (params) => { 
            return (
                <div>
                    {params.row.isAdmin ? (
                        <Admin>Admin</Admin>
                    ) : (
                        <Customer>Customer</Customer>
                    ) }
                </div>
            )
          },
        },
        {
          field: 'actions',
          headerName: 'Hành động',
          sortable: false,
          width: 120,
          renderCell: (params) => { 
            return (
                <Actions>
                    <Delete onClick={ () => handelDelete(params.row.id)  }>Delete</Delete>
                    <View onClick={() => navigate(`/product/${params.row.id}`)}>View</View>
                </Actions>
            )
          }
        },
      ];
      const handelDelete = (id) =>{
        dispatch(usersDelete(id));
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
const Admin = styled.div`
color: rgb(253, 181, 40);
background: rgb(253, 181, 40, 0.12);
padding: 3px 5px;
border-radius: 3px;
font-size: 14px;
`
const Customer = styled.div`
color: rgb(38, 198, 249);
background-color: rgb(38, 198, 249, 0.12);
padding: 3px 5px;
border-radius: 3px;
font-size: 14px;    
`
