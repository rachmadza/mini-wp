Vue.component('article_page', {
  data: () => {
      return {
      }
  },

  props: ['article','DeleteArticle'],
  methods: {

  },
  
  template: `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{article.title}}</h5>
      <img src="" alt="">Ini image
      <h6 class="card-subtitle mb-2 text-muted">{{article.author}}</h6>
      <h6 class="card-subtitle mb-2 text-muted">{{article.created_at}}</h6>
      <p class="card-text">{{article.content}}</p>
      <div class="d-flex flex-nowrap bd-highlight">
          <div class="order-1 p-2 bd-highlight">
              <a href="#" class="card-link">
                <i class="fas fa-edit"></i>
              </a>
          </div>
          <div class="order-2 p-2 bd-highlight">
              <a v-on:click.prevent="DeleteArticle(article._id)" class="card-link">
                <i class="far fa-trash-alt"></i>
              </a>
              <a href="#" class="btn btn-default"> <span class="glyphicon glyphicon-trash"></span></a>
          </div>
      </div>
    </div>
  </div>
  `
})