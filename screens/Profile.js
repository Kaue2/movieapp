import { View, Text, Pressable, Image, FlatList } from "react-native"
import { Icon } from "@iconify/react";
import { use, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SmallBtn from "../components/smallBtn";
import EditProfileModel from "../modals/EditProfileModal";
import { db } from "../firebaseConfig";
import { collection, doc, query, updateDoc, where, getDocs, setDoc, addDoc } from "firebase/firestore";
import CreatePost from "../modals/CreatePost";

export default function Profile(){

    const [editProfile, setEditProfile] = useState(false);
    const [createPost, setCreatePost] = useState(false);
    const [userEmail, setEmail] = useState('');
    const [userNick, setNick] = useState('');
    const [newNickname, setNewNick] = useState('');
    const [updateScreen, setUpdate] = useState(false);
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState(0);
    const [postText, setPostText] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try{
                const nameJson = await AsyncStorage.getItem("name");
                const nicknameJson = await AsyncStorage.getItem("nickname");
                
                if(nameJson != null && nicknameJson != null){
                  const parsedName = JSON.parse(nameJson);
                  const parsedNick = JSON.parse(nicknameJson);
                  const email = parsedName;
                  const nick = parsedNick;
                  setEmail(email);
                  setNick(nick);

                  const postsResp = await fetchUserPosts(email);
                  setPosts(postsResp);
                  setUpdate(false);
                }
            }
            catch(e){
                console.log("Erro ao carregar dados:", e);
            }
        };

        loadData();

    }, [updateScreen]);

    const fetchUserPosts = async (email) => {
      try {
        console.log("neves");
        console.log(email)
        const q = query(collection(db, "posts"), where("email", "==", email));
        const querySnapshot = await getDocs(q);

        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({ id: doc.id, ...doc.data() });
        });
        console.log(posts);
        return posts;
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        throw error;
      }
    };
    
    const updateNickName = async () => {
      try{
        if(newNickname != ''){
          
          const userRefJson = await AsyncStorage.getItem("userRef");
          if(userRefJson != null){
            const parsedRef = JSON.parse(userRefJson);

            const userDbRef = doc(db, 'users', parsedRef);

            await updateDoc(userDbRef, {
              nickname: newNickname,
            });
            await AsyncStorage.setItem("nickname", JSON.stringify(newNickname));
            setNick(newNickname);
            setEditProfile(false)
          }
        }
      }
      catch(error){

      }

    }

    const createPostFunc = async () => {
      try{
        if (movieTitle != "" && movieYear != 0 && postText != null) {
          const movie = await fetchMovie();
          console.log(movie)
          if(movie){
            const userRefJson = await AsyncStorage.getItem("userRef");
            if(userRefJson != null){
              console.log("ola");
              await addDoc(collection(db, "posts"), {
                email: userEmail,
                nickname: userNick,
                title: movie.title,
                year: movie.year,
                poster: movie.poster,
                text: postText,
              });
              setUpdate(true);
              setCreatePost(false);
           }
          }
        }
      }
      catch(error){

      }
    }

    const renderPost = (item) => {
      return (
        <View style={{ flexDirection: "row", paddingVertical: 16, gap: 8}}>
          <Image
            source={{ uri: item.item.poster }}
            style={{ width: 120, height: 200 }}
          />
          <View>
            <Text style={{ color: "#F5F5F5", fontSize: 16, fontStyle: "bold" }}>
              @{item.item.nickname}
            </Text>
            <Text style={{ color: "#8C8C8C", fontSize: 14, width: 160 }}>
              {item.item.text}
            </Text>
          </View>
        </View>
      );
    };

    const fetchMovie = async () => {
      try{
        const response = await fetch(
          `https://www.omdbapi.com/?t=${movieTitle}&y=${movieYear}&apikey=30283c05`
        );
        const data = await response.json();
        if (data.Response === "True") {
          return {
            title: data.Title,
            year: data.Year,
            poster: data.Poster,
          };
        }
      }
      catch(error){

      }
    }

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 52,
          backgroundColor: "#1A1A1A",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Icon
            icon="ix:user-profile-filled"
            width={132}
            height={150}
            style={{ color: "#F5F5F5" }}
          />
          <View style={{ flex: 1, alignItems: "center", gap: 16 }}>
            <Text style={{ color: "#F5F5F5" }}>{userEmail}</Text>
            <Text style={{ color: "#F5F5F5" }}>@{userNick}</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 16,
              justifyContent: "space-between",
              paddingTop: 16,
            }}
          >
            <SmallBtn tittle={"Adicionar"} />
            <SmallBtn
              tittle={"Editar perfil"}
              action={() => setEditProfile(true)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 60,
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <Text style={{ color: "#F5F5F5", fontSize: 20 }}>Seus posts</Text>
          <SmallBtn tittle={"Novo post"} action={() => setCreatePost(true)} />
        </View>
        <EditProfileModel
          visible={editProfile}
          onSave={updateNickName}
          setValue={setNewNick}
          onClose={() => setEditProfile(false)}
          title={"Autalize seus dados"}
          inputPlaceHolder={"Novo Apelido"}
        />
        <CreatePost
          visible={createPost}
          onSave={createPostFunc}
          onClose={() => setCreatePost(false)}
          title={movieTitle}
          setTitle={setMovieTitle}
          year={movieYear}
          setYear={setMovieYear}
          value={postText}
          setValue={setPostText}
          inputPlaceHolder={"Digite sua resenha"}
        />
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={(item) => renderPost(item)}
        />
      </View>
    );
}