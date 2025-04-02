import { fetchUtils, DataProvider } from 'react-admin';

const httpClient = fetchUtils.fetchJson;

const customDataProvider: DataProvider = {
    getList: (resource, params) => {
        const url = `http://localhost:8080/${resource}`;
        console.log(`Fetching getList for resource: ${resource}, URL: ${url}`);
        return httpClient(url).then(({ headers, json }) => {
            console.log(`getList response for ${resource}:`, json);
            return {
                data: json.map((item: any) => ({
                    ...item,
                    id: item.id,
                    species: item.species || item.espèce
                })),
                total: parseInt(headers.get('X-Total-Count') || '0', 10),
            };
        }).catch(error => {
            console.error(`Error fetching ${resource}:`, error);
            throw error;
        });
    },

    getOne: (resource, params) =>
        httpClient(`http://localhost:8080/${resource}/${params.id}`).then(({ json }) => ({
            data: {
                ...json,
                species: json.species || json.espèce
            }
    })),

    getMany: (resource, params) => {
        const query = params.ids.map(id => `id=${id}`).join('&');
        const url = `http://localhost:8080/${resource}?${query}`;
        return httpClient(url).then(({ json }) => ({
            data: json.map((item: any) => ({
                ...item,
                species: item.species || item.espèce
            }))
        }));
    },

    getManyReference: (resource, params) => {
        const url = `http://localhost:8080/${resource}?${params.target}=${params.id}`;
        return httpClient(url).then(({ headers, json }) => ({
            data: json.map((item: any) => ({
                ...item,
                species: item.species || item.espèce
            })),
            total: parseInt(headers.get('X-Total-Count') || '0', 10),
        }));
    },

    create: (resource, params) => {
        let data = params.data;
        
        if (resource === 'animals') {
            data = { ...params.data, animalTemplate: { id: params.data.animalTemplate.id } };
        } else if (resource === 'operations') {
            data = { ...params.data, animal: { id: params.data.animal.id } };
        }
        
        return httpClient(`http://localhost:8080/${resource}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }));
    },
    

    update: (resource, params) => {
        const url = `http://localhost:8080/${resource}/${params.id}`;
        console.log(`Updating resource: ${resource}, ID: ${params.id}, Data:`, params.data);
        const dataToSend = resource === 'animals'
            ? { ...params.data, animalTemplate: { id: params.data.animalTemplate.id } }
            : params.data;

        return httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(dataToSend),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        }).then(({ json }) => {
            console.log(`Update response for ${resource}:`, json);
            const transformedData = ['animals', 'animal-templates'].includes(resource)
                ? { ...json, species: json.species || json.espèce }
                : json;
            return { data: transformedData };
        }).catch(error => {
            console.error(`Error updating ${resource}:`, error);
            throw error;
        });
    },

    delete: (resource, params) =>
        httpClient(`http://localhost:8080/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(() => ({ data: params.previousData })),

    deleteMany: (resource, params) => {
        const query = params.ids.map(id => `id=${id}`).join('&');
        return httpClient(`http://localhost:8080/${resource}?${query}`, {
            method: 'DELETE',
        }).then(() => ({ data: params.ids }));
    },
};

export default customDataProvider;