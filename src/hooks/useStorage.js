import { useState, useEffect} from 'react';
import { projectStorage } from '../Firebase/firebase';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0); //progress from upload
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null); //image url taken from storage

  useEffect(() => {
    //references
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      setUrl(url);
    });
  }, [file] //file is dependency
);

  return {progress, url, error}
}

export default useStorage;