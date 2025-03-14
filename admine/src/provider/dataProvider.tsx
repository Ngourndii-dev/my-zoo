import { fetchUtils, DataProvider } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CreateParams, CreateResult, GetOneParams, GetOneResult, GetListParams, GetListResult, UpdateParams, UpdateResult } from 'ra-core';

const httpClient = fetchUtils.fetchJson;
const dataProvider = jsonServerProvider('http://localhost:8080', httpClient);

const customDataProvider: DataProvider = {
    ...dataProvider,
    create: (resource: string, params: CreateParams): Promise<CreateResult> => {
        if (resource === 'animals') {
            const url = 'http://localhost:8080/animals';
            const options = {
                method: 'POST',
                body: JSON.stringify(params.data),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            };
            return httpClient(url, options).then(({ json }) => ({ data: json }));
        } else if (resource === 'animal-templates') {
            const url = 'http://localhost:8080/animal-templates';
            const options = {
                method: 'POST',
                body: JSON.stringify(params.data),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            };
            return httpClient(url, options).then(({ json }) => ({ data: json }));
        } else if (resource === 'clients') {
            const url = 'http://localhost:8080/clients';
            const options = {
                method: 'POST',
                body: JSON.stringify(params.data),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            };
            return httpClient(url, options).then(({ json }) => ({ data: json }));
        } else if (resource === 'events') {
            const url = 'http://localhost:8080/events';
            const options = {
                method: 'POST',
                body: JSON.stringify(params.data),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            };
            return httpClient(url, options).then(({ json }) => ({ data: json }));
        } else if (resource === 'operations') {
            const url = 'http://localhost:8080/operations';
            const options = {
                method: 'POST',
                body: JSON.stringify(params.data),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            };
            return httpClient(url, options).then(({ json }) => ({ data: json }));
        } else if (resource === 'reviews') {
            const url = 'http://localhost:8080/reviews';
            const options = {
                method: 'POST',
                body: JSON.stringify(params.data),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            };
            return httpClient(url, options).then(({ json }) => ({ data: json }));
        }
        return dataProvider.create(resource, params);
    },
    getOne: (resource: string, params: GetOneParams): Promise<GetOneResult> => {
        if (resource === 'animals') {
            const url = `http://localhost:8080/animals/${params.id}`;
            return httpClient(url).then(({ json }) => ({ data: json.data }));
        } else if (resource === 'animal-templates') {
            const url = `http://localhost:8080/animal-templates/${params.id}`;
            return httpClient(url).then(({ json }) => ({ data: json.data }));
        } else if (resource === 'clients') {
            const url = `http://localhost:8080/clients/${params.id}`;
            return httpClient(url).then(({ json }) => ({ data: json.data }));
        } else if (resource === 'events') {
            const url = `http://localhost:8080/events/${params.id}`;
            return httpClient(url).then(({ json }) => ({ data: json.data }));
        } else if (resource === 'operations') {
            const url = `http://localhost:8080/operations/${params.id}`;
            return httpClient(url).then(({ json }) => ({ data: json.data }));
        } else if (resource === 'orders') {
            const url = `http://localhost:8080/orders/${params.id}`;
            return httpClient(url).then(({ json }) => ({ data: json.data }));
        } else if (resource === 'reviews') {
            const url = `http://localhost:8080/reviews/${params.id}`;
            return httpClient(url).then(({ json }) => ({ data: json.data }));
        }
        return dataProvider.getOne(resource, params);
    },
    // getList: (resource: string, params: GetListParams): Promise<GetListResult> => {
    //     const url = `http://localhost:8080/${resource}?${fetchUtils.queryParameters(params.filter)}`;
    //     return httpClient(url).then(({ json }) => ({
    //         data: json,
    //         total: json.length,
    //     }));
    // },
    update: (resource: string, params: UpdateParams): Promise<UpdateResult> => {
        if (resource === 'animals') {
            const url = 'http://localhost:8080/animals/update';
            const options = {
                method: 'POST',
                body: JSON.stringify(params.data),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            };
            return httpClient(url, options).then(({ json }) => ({ data: json }));
        }
        else if(resource==='events'){
          const url='http://localhost:8080/events/update';
          const options = {
            method: 'POST',
            body: JSON.stringify(params.data),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        };
        return httpClient(url, options).then(({ json }) => ({ data: json }));
        }
        else if(resource==='orders'){
            const url='http://localhost:8080/orders/update';
            const options = {
              method: 'POST',
              body: JSON.stringify(params.data),
              headers: new Headers({ 'Content-Type': 'application/json' }),
          };
          return httpClient(url, options).then(({ json }) => ({ data: json }));
          }
        return dataProvider.update(resource, params);
    },
};

export default customDataProvider;