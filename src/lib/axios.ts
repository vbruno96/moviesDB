import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '5f6526ad16ad049ca29fc45b39aeb755',
    language: 'pt-BR'
  }
})