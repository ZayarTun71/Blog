const { paginate } = require("../utils/paginate");

const Blog = require("../../models").blog;

exports.getAllBlog = async () => {
  const blogPaginate = await paginate(
    Blog,
    {},
    { exclude: ["createdAt", "updatedAt"] },
    [],
    1,
    10
  );
  return blogPaginate;
};

exports.createBlog = async (data, image) => {
  const blog = await Blog.create({ ...data });
  return blog;
};

exports.getBlogById = async (id) => {
  const blog = await Blog.findByPk(id);
  return blog;
};

exports.updateBlog=async (id,data)=>{
  const blog = await Blog.findByPk(id);
  const update_blog = await blog.update(data);
  return update_blog;
}

exports.deleteBlog = async (id) => {
  const blog = await Blog.findByPk(id);
  const delete_blog = blog.destroy();
  return delete_blog;
};
