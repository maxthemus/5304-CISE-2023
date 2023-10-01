import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./AddArticleModal.module.css";
import { useState } from "react";

interface FormData {
  name: string;
  author: string;
  publishDate: string;
  link: string;
}


type AddArticleModalType = {
  /** Style props */
  addArticleModalPosition?: CSSProperties["position"];
  addArticleModalTop?: CSSProperties["top"];
  addArticleModalLeft?: CSSProperties["left"];
};

const AddArticleModal: NextPage<AddArticleModalType> = ({
  addArticleModalPosition,
  addArticleModalTop,
  addArticleModalLeft,
}) => {
  const api_path = process.env.NEXT_PUBLIC_API_URL;  

  const addArticleModalStyle: CSSProperties = useMemo(() => {
    return {
      position: addArticleModalPosition,
      top: addArticleModalTop,
      left: addArticleModalLeft,
    };
  }, [addArticleModalPosition, addArticleModalTop, addArticleModalLeft]);

 const [formData, setFormData] = useState<FormData>({
    name: '',
    author: '',
    publishDate: '',
    link: 'n/a',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    try {
      console.log(api_path);
      const apiUrl = api_path + "/article/";
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({...formData, stage: "moderation"})
      };

      const response = await fetch(apiUrl, requestOptions);
      if(!response) {
        alert("Couldn't send request to server");
      } else {
        alert("Article Added");
      }
    } catch(error) {
      console.log(error);
    }
  };


  return (
    <div className={styles.addArticleModal} style={addArticleModalStyle}>
      <div className={styles.addArticleForm} >
      <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="author"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div> 

        <div>
          <label htmlFor="publishDate">Publish Date:</label>
          <input
            type="text"
            id="publishDate"
            name="publishDate"
            value={formData.publishDate}
            onChange={handleChange}
          />
        </div> 

        <div>
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </div> 
      </div>
      <div className={styles.addArticle}>Add Article</div>

      <div onClick={handleSubmit}className={styles.submitButton}>
        <div className={styles.add}>Add</div>
      </div>
    </div>
  );
};

export default AddArticleModal;
