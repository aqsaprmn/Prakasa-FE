import UserInstance from "./Instance";

export const GETListUser = async () => {
  try {
    const fetching = await UserInstance.get(
      `${import.meta.env.VITE_GET_USER_END_POINT}`
    );

    const result = {
      isSuccess: fetching.data.success,
      isError: !fetching.data.success,
      data: fetching.data,
    };

    return result;
  } catch (error) {
    return {
      isSuccess: false,
      isError: true,
      data: error,
    };
  }
};

export const GETDetailUser = async ({ uuid }: { uuid: string }) => {
  try {
    const fetching = await UserInstance.get(
      `${import.meta.env.VITE_GET_DETAIL_USER_END_POINT}/${uuid}`
    );

    const result = {
      isSuccess: fetching.data.success,
      isError: !fetching.data.success,
      data: fetching.data,
    };

    return result;
  } catch (error) {
    return {
      isSuccess: false,
      isError: true,
      data: error,
    };
  }
};

export const POSTCreateUser = async ({
  body,
}: {
  body: {
    name: string;
    role: string;
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
  };
}) => {
  try {
    const fetching = await UserInstance.post(
      `${import.meta.env.VITE_CREATE_USER_END_POINT}`,
      body
    );

    const result = {
      isSuccess: fetching.data.success,
      isError: !fetching.data.success,
      data: fetching.data,
    };

    return result;
  } catch (error) {
    return {
      isSuccess: false,
      isError: true,
      data: error,
    };
  }
};

export const PATCHEditUser = async ({
  body,
}: {
  body: {
    uuid: string;
    name: string;
    role: string;
    email: string;
    phone: string;
  };
}) => {
  try {
    const uuid = body.uuid;

    const fetching = await UserInstance.patch(
      `${import.meta.env.VITE_EDIT_USER_END_POINT}/${uuid}`,
      body
    );

    const result = {
      isSuccess: fetching.data.success,
      isError: !fetching.data.success,
      data: fetching.data,
    };

    return result;
  } catch (error) {
    return {
      isSuccess: false,
      isError: true,
      data: error,
    };
  }
};

export const DELETEUser = async ({ uuid }: { uuid: string }) => {
  try {
    const fetching = await UserInstance.delete(
      `${import.meta.env.VITE_DELETE_USER_END_POINT}/${uuid}`
    );

    const result = {
      isSuccess: fetching.data.success,
      isError: !fetching.data.success,
      data: fetching.data,
    };

    return result;
  } catch (error) {
    return {
      isSuccess: false,
      isError: true,
      data: error,
    };
  }
};
