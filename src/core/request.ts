export const NetworkRequest = async (
  method: string,
  url: string,
  params: any
) => {
  try {
    const rawData: any = await fetch(url, {
      method,
      body: params && JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    // if (rawData.status === 400) {
    //   const jsonData = await rawData.json();
    //   return {
    //     type: failureState,
    //     payload: jsonData.message || jsonData.error_message || errorMessage,
    //   };
    // }
    //
    // if (rawData.status === 401 || rawData.status === 403) {
    //   const jsonData = await rawData.json();
    //
    //   notify({
    //     message: jsonData.error_message || errorMessage,
    //     progress_bar: true,
    //     type: ERROR,
    //     closeInTime: 5000,
    //   });
    //
    //   return { type: LOGOUT, payload: jsonData.error_message || errorMessage };
    // }
    //
    // if (rawData.status === 500) {
    //   const jsonData = await rawData.json();
    //   throw new Error(jsonData.error_message || 'Internal server error');
    // }
    //
    // if (rawData.status >= 500) {
    //   throw new Error('Gateway Timeout');
    // }

    if (rawData.status === 204 || rawData.status === 201) {
      return { payload: '' };
    }
    const jsonData = await rawData.json();
    if (jsonData.success === true) {
      return {
        payload: jsonData.data || jsonData.success_message,
      };
    }

    throw new Error(jsonData.error_message);
  } catch (error: any) {
    return { payload: error.message };
  }
};