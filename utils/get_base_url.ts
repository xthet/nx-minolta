export function get_base_url() {
	if (process.env.NODE_ENV === "production") {
		return "https://minolta.com"
	} else {
		return "http://localhost:4406"
	}
}
