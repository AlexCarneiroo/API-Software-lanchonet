import { Model , DataTypes } from "sequelize";
import { sequelizee } from "../Instaces/mysql";

export interface ProdutosInterface extends Model{
    id:number,
    nome:string,
    igrediente:string,
    valor:number,
    valorPromocional?:number,
    imagem?:any,
    quantidade?:number,
    promocao?:boolean,
    categoria:string,
    subCategoria:string
}

export const Produtos = sequelizee.define<ProdutosInterface>('produtos',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.NUMBER
    },
    nome:{
        type: DataTypes.STRING
    },
    igrediente:{
        type: DataTypes.STRING
    },
    valor:{
        type: DataTypes.STRING
    },
    valorPromocional:{
        type: DataTypes.STRING
    },
    imagem:{
        type: DataTypes.BLOB
    },
    quantidade:{
        type: DataTypes.NUMBER
    },
    promocao:{
        type: DataTypes.BOOLEAN
    },
    categoria:{
        type: DataTypes.STRING
    },
    subCategoria:{
        type: DataTypes.STRING
    }
},{
    tableName:'produtos',
    timestamps:false
})