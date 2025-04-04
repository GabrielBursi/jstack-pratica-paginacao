import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { Post, SafeType } from "@/types";
import { uniqueId } from "lodash";
import { faker } from '@faker-js/faker';
import Link from "next/link";

const posts: SafeType<Post>[] = [
	{
		id: Number(uniqueId()),
		user_id: Number(uniqueId()),
		caption: faker.lorem.sentence(),
		image_url: faker.image.url({ height: 500, width: 500 }),
		likes_count: faker.number.int({ min: 100, max: 5000 }),
		published_at: faker.date.past().toISOString(),
		username: faker.internet.username(),
		name: faker.person.fullName(),
		avatar_url: faker.image.url({ height: 500, width: 500 })
	},
	{
		id: Number(uniqueId()),
		user_id: Number(uniqueId()),
		caption: faker.lorem.sentence(),
		image_url: faker.image.url({ height: 500, width: 500 }),
		likes_count: faker.number.int({ min: 100, max: 5000 }),
		published_at: faker.date.past().toISOString(),
		username: faker.internet.username(),
		name: faker.person.fullName(),
		avatar_url: faker.image.url({ height: 500, width: 500 })
	},
	{
		id: Number(uniqueId()),
		user_id: Number(uniqueId()),
		caption: faker.lorem.sentence(),
		image_url: faker.image.url({ height: 500, width: 500 }),
		likes_count: faker.number.int({ min: 100, max: 5000 }),
		published_at: faker.date.past().toISOString(),
		username: faker.internet.username(),
		name: faker.person.fullName(),
		avatar_url: faker.image.url({ height: 500, width: 500 })
	},
	{
		id: Number(uniqueId()),
		user_id: Number(uniqueId()),
		caption: faker.lorem.sentence(),
		image_url: faker.image.url({ height: 500, width: 500 }),
		likes_count: faker.number.int({ min: 100, max: 5000 }),
		published_at: faker.date.past().toISOString(),
		username: faker.internet.username(),
		name: faker.person.fullName(),
		avatar_url: faker.image.url({ height: 500, width: 500 })
	},
	{
		id: Number(uniqueId()),
		user_id: Number(uniqueId()),
		caption: faker.lorem.sentence(),
		image_url: faker.image.url({ height: 500, width: 500 }),
		likes_count: faker.number.int({ min: 100, max: 5000 }),
		published_at: faker.date.past().toISOString(),
		username: faker.internet.username(),
		name: faker.person.fullName(),
		avatar_url: faker.image.url({ height: 500, width: 500 })
	},
	{
		id: Number(uniqueId()),
		user_id: Number(uniqueId()),
		caption: faker.lorem.sentence(),
		image_url: faker.image.url({ height: 500, width: 500 }),
		likes_count: faker.number.int({ min: 100, max: 5000 }),
		published_at: faker.date.past().toISOString(),
		username: faker.internet.username(),
		name: faker.person.fullName(),
		avatar_url: faker.image.url({ height: 500, width: 500 })
	},
];

export default function Home() {
	return (
		<main className="max-w-xl mx-auto py-4 px-4 sm:px-0">
			<div className="flex gap-4 overflow-x-auto pb-4 mb-4">
				{Array.from({ length: 8 }).map((_, i) => (
					<div key={i} className="flex flex-col items-center">
						<div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 p-0.5">
							<div className="bg-white rounded-full p-0.5 w-full h-full">
								<Avatar className="w-full h-full">
									<AvatarImage src={`/api/placeholder/40/40`} />
									<AvatarFallback>U{i}</AvatarFallback>
								</Avatar>
							</div>
						</div>
						<span className="text-xs mt-1 truncate w-16 text-center">user_{i}</span>
					</div>
				))}
			</div>

			<div className="space-y-6">
				{posts.map((post) => post.image_url ? (
					<div key={post.id} className="border rounded-md overflow-hidden bg-white">
						<div className="flex items-center justify-between p-3">
							<div className="flex items-center space-x-3">
								<Link href={`/profile/${post.user_id}`}>
								<Avatar>
									<AvatarImage src={post.avatar_url ?? undefined} />
									<AvatarFallback>{post?.name?.[0] ?? 'U'}</AvatarFallback>
								</Avatar>
								</Link>
								<div>
									<p className="font-medium text-sm">{post.username}</p>
								</div>
							</div>
							<Button variant="ghost" size="icon">
								<MoreHorizontal className="h-5 w-5" />
							</Button>
						</div>

						<div className="relative aspect-square w-full bg-gray-100">
							<Image
								src={post.image_url}
								alt={`Post by ${post.username}`}
								className="object-cover w-full h-full"
								width={500}
								height={500}
							/>
						</div>

						<div className="p-3">
							<div className="flex items-center space-x-4">
								<Button variant="ghost" size="icon" className="text-red-500">
									<Heart className="h-6 w-6" />
								</Button>
								<Button variant="ghost" size="icon">
									<MessageCircle className="h-6 w-6" />
								</Button>
							</div>
							<p className="font-medium text-sm mt-2">{post.likes_count} likes</p>
							<div className="mt-1">
								<span className="font-medium text-sm">{post.username}</span>
								<span className="text-sm ml-2">{post.caption}</span>
							</div>
							<p className="text-xs text-gray-500 mt-1">
								{post.published_at ? new Date(post.published_at).toLocaleDateString() : new Date().toLocaleDateString()}
							</p>
						</div>
					</div>
				): null)}
			</div>
		</main>
	);
}
