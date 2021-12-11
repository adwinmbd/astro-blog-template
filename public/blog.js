---
// import BlogPost from '../../layouts/BlogPost.astro';
// Layout Import
import MainLayout from '../../layouts/MainLayout.astro'
// Component Imports
import PostList from '../../components/PostList.astro'
import Pagination from '../../components/Pagination.astro'

const PAGE_SIZE = 3;
const allPosts = Astro.fetchContent('../../posts/*.md');
const allSortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export async function getStaticPaths({ paginate, rss }) {

    return paginate(allSortedPosts, {
      pageSize: PAGE_SIZE
    })
}

const { slug } = Astro.request.params;
const content = Astro.props;
const { page } = Astro.props
---
<MainLayout 
  title="Home" 
  description={`Hey! This is Nagewadia a simple Astro blog template.`}>
        <h1 class="font-size-3">Nikin Nagewadia</h1>
        <p class="lead-paragraph">Interaction designer at the Government Digital Service</p>
        <PostList posts={allSortedPosts} />
        <!-- <Pagination page={page} /> -->
        <Pagination prevUrl="/blog" nextUrl="/posts/2" />
</MainLayout>