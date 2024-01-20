import { Request, Response } from "express";


import { Produtos } from "../Models/produtos";

export const AllProdutos = async (req: Request, res: Response) => {
    let AllProdutos = await Produtos.findAll()
    res.json(AllProdutos)
}

export const DeleleProduto = async (req: Request, res: Response) => {

}

export const CreateProduto = async (req: Request, res: Response) => {
    try {
        const { nome, igrediente, valor , categoria , subCategoria } = req.body;

        // Validar se os campos necessários estão presentes
        if (!nome || !igrediente || !valor || !categoria || !subCategoria) {
            return res.status(400).json({ error: "Campos obrigatórios ausentes" });
        }

        const newProduto = await Produtos.create({ nome, igrediente, valor , categoria , subCategoria });

        res.json({ id: newProduto.id, nome, igrediente, valor , categoria , subCategoria });
        console.log(newProduto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const UpdateProduto = async (req: Request, res: Response) => {

}