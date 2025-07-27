import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      //   components={{ ...components, ...(props.components || {}) }}
    />
  );
}
