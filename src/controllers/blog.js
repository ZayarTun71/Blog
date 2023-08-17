const { getAllBlog, createBlog ,getBlogById ,updateBlog,deleteBlog} = require("../services/blog");
const upload = require("../utils/imageUpload");
const { successResponse, errorResponse } = require("../utils/respond");

exports.getAllBlog = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const blog = await getAllBlog();
    return successResponse(
      req,
      res,
      200,
      blog,
      `Blog fetched successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};

exports.createBlog = async (req, res, next) => {
  const startTime = Date.now();
  const data=req.body
  res.send(data);
  // try {
  //   // upload(req,res,async (err)=>{
  //   //   if(err){
  //   //     return res.status(500).json({ message: "Failed to upload image" });
  //   //   }
  //   // })
  //   //   const validation = validator.validate(req.body, projectSchema);
  //   //   if (!validation.valid) {
  //   //     const errors = validationErrors(validation);
  //   //     return errorResponse(req, res, 400, errors, startTime);
  //   //   }

  //   const blog = await createBlog(req.body);
  //   return successResponse(
  //     req,
  //     res,
  //     200,
  //     blog,
  //     `Blog created successfully`,
  //     startTime,
  //     1
  //   );
  // } catch (error) {
  //   return errorResponse(req, res, error.code, error.message, startTime);
  // }
};

exports.getBlogById = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const id = parseInt(req.params.id);
    const blog = await getBlogById(id);
    return successResponse(
      req,
      res,
      200,
      blog,
      `Blog fetched successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};

exports.updateBlog= async (req, res, next) => {
  const startTime = Date.now();
  try {
    const id = parseInt(req.params.id);
    const blog = await updateBlog(id,req.body);
    return successResponse(
      req,
      res,
      200,
      blog,
      `Blog updated successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};

exports.deleteBlog =async(req,res,next)=>{
  const startTime = Date.now();
  try {
    const id = parseInt(req.params.id);
    const blog = await deleteBlog(id);
    return successResponse(
      req,
      res,
      200,
      blog,
      `Blog deleted successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};
