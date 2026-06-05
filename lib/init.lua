-- typescript-resource-s3-library main module.
-- Renders S3 client module using AWS SDK v3.
--
-- The calling archetype is responsible for adding the corresponding
-- pnpm dependencies to package.json:
--   @aws-sdk/client-s3
--
-- API:
--   local s3 = require("typescript-resource-s3")
--   s3.render(context, { destination = context:get("project-name") })

local M = {}

function M.render(context, opts)
    opts = opts or {}
    local d = opts.destination
    if d and d ~= "" then
        directory.render("contents", context, { destination = d })
    else
        directory.render("contents", context)
    end
    return context
end

return M
