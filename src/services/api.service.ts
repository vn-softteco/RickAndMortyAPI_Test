interface RequestOptions extends RequestInit {
    params?: Record<number | string, number | string | null>;
}

const apiUrl = import.meta.env.VITE_APP_API_URL;

export function API<T>(url: string, options: RequestOptions): Promise<T> {
    const requestUrl = new URL(`${apiUrl}${url}`);

    if (options.params) {
        Object.entries(options.params).forEach(([key, value]) => {
            if (value) requestUrl.searchParams.append(key, value.toString());
        });
        delete options.params;
    }

    return new Promise((resolve, reject) => {
        fetch(requestUrl.href, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Request failed");
                }
                resolve(response.json());
            })
            .catch((error) => {
                console.error("Error:", error);
                return reject(error);
            });
    });
}
