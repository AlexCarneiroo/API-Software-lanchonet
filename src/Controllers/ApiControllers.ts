import { Request , Response } from "express";


import { Produtos } from "../Models/produtos";

export const AllProdutos = async (req:Request, res:Response)=>{
    let AllProdutos = await Produtos.findAll()
    res.json(AllProdutos)
}

export const DeleleProduto = async (req:Request,res:Response)=>{
   
}

export const CreateProduto = async (req:Request,res:Response)=>{
   
}

export const UpdateProduto = async (req:Request,res:Response)=>{
   
}