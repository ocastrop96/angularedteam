import { AuthorInterface } from "./author.interface";

export interface TaskInterface{
title:string;
description:string;
autor:AuthorInterface;
}