import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "./tagsinput.scss";

export default function TagsInput({tags, suggestions, delimiters, handleDelete, handleAddition, handleDrag, handleTagClick}) {

  return (
    <div className="inputtags">
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        />
      </div>
    </div>
  );
}
