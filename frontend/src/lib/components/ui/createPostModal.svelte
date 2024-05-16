<dialog id="createPost" class="modal">
	<div class="modal-box border-2 border-primary">
		<h3 class="font-bold text-lg mb-5">Create A Post!</h3>
		<form>
			<label class="input input-bordered flex items-center gap-2 mb-2">
				<input type="text" class="grow" placeholder="Title" />
			</label>
			<textarea class="textarea textarea-bordered w-full" placeholder="Write something amazing..."
			></textarea>
			<div class="flex flex-row items-center justify-between w-full mt-4">
				<button class="btn btn-success">POST!</button>
				<div class="modal-action mt-0">
					<form method="dialog">
						<!-- if there is a button in form, it will close the modal -->
						<button class="btn btn-error">CLOSE</button>
					</form>
				</div>
			</div>
		</form>
	</div>
</dialog>
