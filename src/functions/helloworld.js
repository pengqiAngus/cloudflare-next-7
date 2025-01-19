// 定义 CORS 头
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400", // 24小时缓存预检请求结果
};

export default {
  async fetch(request) {
    // 处理 OPTIONS 预检请求
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    // 处理实际请求
    try {
      const response = new Response(JSON.stringify({ message: "Hello" }), {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });

      return response;
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }
  },
};
