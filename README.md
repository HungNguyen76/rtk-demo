### React Router 
1. Tổng quan về React Router
2. Configuring Routes
3. Router
4. Link và NavLink
5. Navigate
6. Dynamic Routes
7. Search Param
8. Protected routes
9. Lazy loading
10. Scroll to top

### API and Asynchronous

### Redux Toolkit
     1. Tổng quan Redux toolkit? 
        - 1 thư viện giúp đơn giản hoá sử dụng redux trong ứng dụng
        - không phải viết quá nhiều code tạo reducers và actions hoặc sử dụng nhiều thư viện bên ngoài để quản lý trạng thái ứng dụng
    2. Redux toolkit sử dụng các phương thức:
        - createSlice(): là một hàm để tạo "slice" trong redux toolkit, giúp phân tách state thành các phần nhỏ hơn và quản lý dễ hơn
        - createAction(): là một hàm để tạo action creator đơn giản hơn trong Redux Toolkit
        - createReducer(): là 1 hàm để tạo reducer đơn giản hơn trong redux toolkit
        - configureStore(): là 1 hàm cấu hình Redux store với tính năng như middleware, Devtools tích hợp sẵn, giúp giảm thời gian và công sức cấu hình redux store
        - createAsyncThunk(): tác vụ bất đồng bộ (ví dụ callAPI,...)
    3. Lợi ích khi sử dụng Redux Toolkit:
        - Giảm thiểu lượng code cần viết để tạo reducer và actions
        - Giảm thiểu boilerplate code: reducer và actions
        - Tích hợp các công cụ: Devtools, middleware, cấu hình store
        - sử dụng slices để phân tách state
        - Redux toolkit tương thích với redux truyền thống
    4. Cài đặt thư viện Redux Toolkit: npm install @reduxjs/toolkit
