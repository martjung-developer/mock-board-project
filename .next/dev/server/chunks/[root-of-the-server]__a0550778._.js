module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_to
]);
async function Fetch_to(dir, payload = {}, headers = {
    "x-api-key": process.env.API_KEY || ""
}, retries = 3, delay = 1000 // wait time between attempts in ms
) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return {
            success: false,
            message: "Invalid API Directory"
        };
    }
    for(let attempt = 1; attempt <= retries; attempt++){
        try {
            const response = await fetch(dir, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json().catch(()=>null); // safe parse
            if (response.ok) {
                console.log("Status for fetch: ", data);
                return {
                    success: true,
                    data
                }; // success
            } else {
                console.log(data?.error);
                return {
                    success: false,
                    message: data?.error || `Request failed: ${response.status}`
                };
            }
        } catch (err) {
            let message = "Unknown fetch error";
            if (err instanceof Error) message = err.message;
            console.error(`Attempt ${attempt} fetch error:`, message);
        }
        if (attempt < retries) await new Promise((res)=>setTimeout(res, delay));
    }
    return {
        success: false,
        message: `All ${retries} attempts failed for ${dir}`
    };
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/mock-board-project/src/app/utilities/salt/encrypt.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hashPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
async function hashPassword(password) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
}
}),
"[project]/mock-board-project/src/app/utilities/salt/verify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
async function verifyPassword(plainPassword, hashedPassword) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(plainPassword, hashedPassword);
}
}),
"[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SweetAlert2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/sweetalert2@11.26.4/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-route] (ecmascript)");
;
function SweetAlert2(title, text, icon, showConfirmButton = true, ok, showCancelButton = false, cancel, showLoading = false) {
    const isProcess = icon === 'process';
    // Detect dark mode
    // const isDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].fire({
        title,
        text,
        icon: isProcess ? undefined : icon,
        showConfirmButton: showConfirmButton && !showLoading,
        showCancelButton,
        confirmButtonText: ok,
        cancelButtonText: cancel,
        allowOutsideClick: false,
        background: '#1A54B8',
        color: '#fff',
        didOpen: ()=>{
            if (showLoading || isProcess) {
                __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].showLoading();
            }
        }
    });
}
}),
"[project]/mock-board-project/src/app/utilities/Fetch_toFile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_toFile
]);
async function Fetch_toFile(dir, file, fields = {}, headers = {}, retries = 3, delay = 1000) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return {
            success: false,
            message: "Invalid API Directory"
        };
    }
    if (!file) {
        return {
            success: false,
            message: "No file provided"
        };
    }
    // Build multipart form
    const formData = new FormData();
    formData.append("file", file);
    for(const key in fields){
        formData.append(key, String(fields[key]));
    }
    for(let attempt = 1; attempt <= retries; attempt++){
        try {
            const response = await fetch(dir, {
                method: "POST",
                headers: {
                    ...headers
                },
                body: formData
            });
            const data = await response.json().catch(()=>null);
            if (response.ok) {
                console.log("Status for file upload:", data);
                return {
                    success: true,
                    data
                };
            } else {
                console.log(data?.error);
                return {
                    success: false,
                    message: data?.error || `Request failed: ${response.status}`
                };
            }
        } catch (err) {
            let message = "Unknown fetch error";
            if (err instanceof Error) message = err.message;
            console.error(`Attempt ${attempt} fetch error:`, message);
        }
        if (attempt < retries) await new Promise((res)=>setTimeout(res, delay));
    }
    return {
        success: false,
        message: `All ${retries} attempts failed for ${dir}`
    };
}
}),
"[project]/mock-board-project/src/app/utilities/Fetch_download.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_to
]);
async function Fetch_to(dir, payload = {}, headers = {
    "x-api-key": process.env.API_KEY || ""
}, retries = 3, delay = 1000, expectBlob = false // <-- new flag
) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return {
            success: false,
            message: "Invalid API Directory"
        };
    }
    for(let attempt = 1; attempt <= retries; attempt++){
        try {
            const response = await fetch(dir, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const errText = await response.text();
                return {
                    success: false,
                    message: errText || `Request failed: ${response.status}`
                };
            }
            const data = expectBlob ? await response.blob() : await response.json().catch(()=>null);
            return {
                success: true,
                data
            };
        } catch (err) {
            let message = "Unknown fetch error";
            if (err instanceof Error) message = err.message;
            console.error(`Attempt ${attempt} fetch error:`, message);
        }
        if (attempt < retries) await new Promise((res)=>setTimeout(res, delay));
    }
    return {
        success: false,
        message: `All ${retries} attempts failed for ${dir}`
    };
}
}),
"[project]/mock-board-project/src/app/utilities/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$salt$2f$encrypt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/salt/encrypt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$salt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/salt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_toFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_toFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_download$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_download.js [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-route] (ecmascript) <export default as Fetch_to>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fetch_to",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-route] (ecmascript)");
}),
"[project]/mock-board-project/src/app/config/api_links/links.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"auth":{"signup":"/services/supabase/auth/signup","signin":"/services/supabase/auth/signin","check_email":"/services/supabase/auth/check_email"},"storage":{"uploadfile":"/services/supabase/storage/uploadfile","retrieve":"/services/supabase/storage/retrieve","delete":"/services/supabase/storage/delete","download":"/services/supabase/storage/download"},"admin":{"retrieve_user_assign_by":"/services/supabase/admin/retrieve_user_assign_by","retrieve_all_user":"/services/supabase/admin/retrieve_all_user_student","assigned":"/services/supabase/admin/assigned","unassigned":"/services/supabase/admin/unassigned","exam_result":"/services/supabase/admin/exam_result"},"user_data":{"questionare":"/services/api/response_to_python","retrieve_mock_exam":"/services/supabase/user/retrieve_mock_exam","retrieve_mock_exam_reviewer":"/services/supabase/user/retrieve_mock_exam_reviewer","exam_result":"/services/supabase/user/exam_result","update_score":"/services/supabase/user/update_score"},"python_response":"http://127.0.0.1:10000/"});}),
"[project]/mock-board-project/src/app/services/api/response_to_python/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-route] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
;
;
;
async function POST(req) {
    const { id } = await req.json();
    if (!id) return __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        error: "Id not found"
    }, {
        status: 409
    });
    const api_links = process.env.RENDER || __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].python_response;
    console.log(`[Python API] Downloading file from: ${api_links}download-file with id: ${id}`);
    const downloadResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(`${api_links}download-file`, {
        id: id
    });
    console.log("[Python API] Download response:", downloadResponse);
    if (downloadResponse.success) {
        console.log(`[Python API] Generating questions from: ${api_links}generate-questionare`);
        const questionResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(`${api_links}generate-questionare`, {
            id: id
        });
        console.log("[Python API] Question generation response:", questionResponse);
        if (!questionResponse.success) {
            const errorMsg = questionResponse.message || questionResponse.data?.error || "Failed to generate questions";
            console.error("[Python API] Question generation failed:", errorMsg);
            return __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: errorMsg
            }, {
                status: 409
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: questionResponse
        }, {
            status: 200
        });
    } else {
        const errorMsg = downloadResponse.message || downloadResponse.data?.error || "Python server not responding. Please start the Python server at http://127.0.0.1:10000";
        console.error("[Python API] File download failed:", errorMsg);
        return __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: errorMsg
        }, {
            status: 409
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a0550778._.js.map