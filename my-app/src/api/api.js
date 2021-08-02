import axios from 'axios';

export const checkNumber = async (number) => {
  try {
    const response = await axios.get(`http://apilayer.net/api/validate?access_key=cb4087d6dffb5d9432531263581be175&number=${number}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
