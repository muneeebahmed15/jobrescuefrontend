export const formatCreatedAtDate = (customDate) => {
    const date = new Date(customDate);

    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
  };