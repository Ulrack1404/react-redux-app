import httpService from "./http.service";

const todosEndepoint = "todos/";

const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndepoint, {
      params: {
        _page: 1,
        _limit: 2,
      },
    });
    return data;
  },
  post: async (title, completed) => {
    const { data } = await httpService.post(todosEndepoint, {
      title: title,
      completed: completed,
    });
    return data;
  },
};
export default todosService;
