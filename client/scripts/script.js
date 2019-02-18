var app = new Vue({
  el: '#app',
  name: "mini_wp",
  data: {
    user: {
      email: "",
      password: "",
    },
    input: {
      title: "",
      content: "",
      author: "Guest01",
      image: ""
    },
    userLoggedIn: false,
    articles: [],
    showFormRegister: false,
    showFormLogin: true,
  },
  created() {
    this.checkUserLoggedIn();
  },
  mounted() {
    this.get_article()
  },
  methods: {
    checkUserLoggedIn() {
      localStorage.token ? this.userLoggedIn = true : this.userLoggedIn = false;
    },
    get_article() {
      axios({
        method: "get",
        url: "http://localhost:3000/article",
        headers: {
          token: localStorage.token
        }
      })
        .then((result) => {
          this.articles = result.data.Articles
        })
        .catch(err => {
          console.log(err)
        })
    },
    login() {
      axios({
        method: "post",
        url: "http://localhost:3000/login",
        data: this.user
      })
        .then((result) => {
          console.log(result, 'ini result dari login')
          localStorage.setItem("token", result.data.token)
          localStorage.setItem('name', result.data.name)
          this.userLoggedIn = true
          this.input.author = result.data.name || 'Guest01'
        }).catch((err) => {
          console.log(err);
        });
    },

    create() {
      axios({
        method: "post",
        url: "http://localhost:3000/article",
        data: this.input,
        headers: {
          token: localStorage.token
        }
      })
      .then((result) => {
        console.log(result)
        this.input.title = ""
        this.input.content = ""
        this.input.author = ""
        this.input.image = ""
        this.get_article()
      })
      .catch((err) => {
        console.log(err)
      })
    },

    deleteArticle(id) {
      // console.log('delete invoked', id)
      axios({
        method: "delete",
        url: `http://localhost:3000/article/${id}`,
        headers: {
          token: localStorage.token
        }
      })
      .then((result) => {
        console.log('article deleted')
        
        this.get_article();
      })
      .catch((err) => {
        console.log(err)
      })
    },

    logout() {
      console.log('logout invoked')
      // this.isLogin = false
      this.userLoggedIn = false
      localStorage.clear()
    }

  },
});